<template>
  <div class="check-list-container">
    <div class="check-list">
      <!-- 기본 리스트 아이템 -->
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="['list-content', { 'editing-active': item.editing }]"
      >
        <div
          :class="['list-check', { active: item.checked }]"
          @click="toggleCheck(index)"
        >
          <Check1Icon
            v-if="item.checked"
            :active="true"
            width="18px"
            height="18px"
          />
        </div>

        <!-- 항목 이름 또는 수정 중일 때 인풋 필드 -->
        <div
          v-if="item.editing"
          class="list-detail body1-regular"
        >
          <input
            v-model="item.editingName"
            type="text"
            :class="[
              'edit-item-input',
              'transparent-input',
              `edit-item-input-${index}`,
            ]"
            @keyup.enter="saveItem(index)"
            @blur="saveItem(index)"
            autofocus
          />
        </div>
        <div
          v-else
          class="list-detail body1-regular"
        >
          {{ item.name }}
        </div>

        <!-- 메뉴 버튼 -->
        <div
          class="menu-button"
          v-if="!item.editing && !item.showActions"
          @click="toggleActions(index)"
        >
          <i class="fa-solid fa-ellipsis fa-2xs"></i>
        </div>

        <!-- 액션 버튼들 -->
        <div
          v-if="item.showActions && !item.editing"
          class="action-buttons"
        >
          <button
            @click.stop="editItem(index)"
            class="edit-button"
          >
            <img
              src="@/components/icons/basic/Edit Icon.svg"
              alt="Edit"
              width="24px"
              height="24px"
            />
          </button>
          <button
            @click.stop="deleteItem(index)"
            class="delete-button"
          >
            <img
              src="@/components/icons/basic/Delete Icon.svg"
              alt="Delete"
              width="24px"
              height="24px"
            />
          </button>
        </div>
      </div>

      <!-- 항목 추가 인풋 필드 -->
      <div
        v-if="showInputField"
        class="list-content"
      >
        <div class="list-check"></div>
        <input
          v-model="newItem"
          type="text"
          placeholder="새 항목 입력"
          @keyup.enter="addItem"
          class="add-item-input transparent-input"
          autofocus
        />
      </div>
    </div>

    <!-- '항목 추가' 버튼 -->
    <div
      class="add-list"
      v-if="!showInputField"
      @click="showInputField = true"
    >
      <AddIcon />
      <div class="add-title body2-bold">항목 추가</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getCookie } from '@/utils/cookies';
import { Check1Icon, AddIcon } from '@/components';
import '@fortawesome/fontawesome-free/css/all.css';
import axios from 'axios';

// 기본 리스트 아이템
const defaultItems = [
  {
    name: '등산화',
    checked: false,
    showActions: false,
    editing: false,
    editingName: '',
  },
  {
    name: '모자',
    checked: false,
    showActions: false,
    editing: false,
    editingName: '',
  },
  {
    name: '우비',
    checked: false,
    showActions: false,
    editing: false,
    editingName: '',
  },
  {
    name: '배낭',
    checked: false,
    showActions: false,
    editing: false,
    editingName: '',
  },
  {
    name: '생수',
    checked: false,
    showActions: false,
    editing: false,
    editingName: '',
  },
  {
    name: '가벼운 구급약',
    checked: false,
    showActions: false,
    editing: false,
    editingName: '',
  },
  {
    name: '랜턴',
    checked: false,
    showActions: false,
    editing: false,
    editingName: '',
  },
  {
    name: '선글라스',
    checked: false,
    showActions: false,
    editing: false,
    editingName: '',
  },
  {
    name: '간식',
    checked: false,
    showActions: false,
    editing: false,
    editingName: '',
  },
  {
    name: '잠옷',
    checked: false,
    showActions: false,
    editing: false,
    editingName: '',
  },
];

const items = ref([...defaultItems]); // 백엔드에서 가져올 데이터를 저장할 변수
const newItem = ref('');
const showInputField = ref(false);

// 체크 상태 토글 함수
const toggleCheck = async (index: number) => {
  items.value[index].checked = !items.value[index].checked;
  await saveItems();
};

onMounted(async () => {
  try {
    const accessToken = getCookie('Authorization');

    const type = 'CHECK';

    const response = await axios.get(
      `${process.env.VUE_APP_BASE_API}/api/v1/todo`,
      {
        params: { type },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const latestItem = response.data.reduce(
      (max, item) => (item.id > max.id ? item : max),
      response.data[0]
    );

    if (latestItem !== null) {
      const itemsArray = [];
      const itemsList = latestItem.content.split(', ');

      for (let i = 0; i < itemsList.length; i++) {
        const item = itemsList[i];
        const [name, checked] = item.split(': ');

        itemsArray.push({
          name: name.trim(),
          checked: checked === 'true',
          showActions: false,
          editing: false,
          editingName: '',
        });
      }

      items.value = itemsArray;
    } else {
      items.value = [...defaultItems];
    }
  } catch (error) {
    items.value = [...defaultItems];
  }
});

// 항목 추가 함수
const addItem = async () => {
  if (newItem.value.trim() !== '') {
    const newItemData = {
      name: newItem.value,
      checked: false,
      showActions: false,
      editing: false,
      editingName: '',
    };
    items.value.push(newItemData);

    await saveItems(); // 추가된 후 백엔드에 저장

    newItem.value = '';
    showInputField.value = false;
  }
};

// 액션 토글 함수
const toggleActions = (index: number) => {
  items.value.forEach((item, i) => {
    if (i !== index) item.showActions = false;
  });

  items.value[index].showActions = !items.value[index].showActions;
};

// 아이템 수정 함수
const editItem = (index: number) => {
  const item = items.value[index];
  item.editingName = item.name; // 현재 이름을 수정할 이름으로 설정
  item.editing = true;
  item.showActions = false; // 액션 버튼 숨기기

  setTimeout(() => {
    const input = document.querySelector(
      `.edit-item-input-${index}`
    ) as HTMLInputElement;
    if (input) {
      input.focus();
    }
  }, 0);
};

// 아이템 저장 함수
const saveItem = async (index: number) => {
  const item = items.value[index];
  if (item.editingName.trim() !== '') {
    item.name = item.editingName;
  }
  item.editing = false;
  item.showActions = false;

  await saveItems(); // 수정된 후 백엔드에 저장
};

const saveItems = async () => {
  const content = items.value
    .map((item) => `${item.name}: ${item.checked}`)
    .join(', ');

  const requestBody = {
    type: 'CHECK',
    content: content,
  };

  try {
    const accessToken = getCookie('Authorization');
    await axios.post(
      `${process.env.VUE_APP_BASE_API}/api/v1/todo`,
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  } catch (error) {
    console.error('Failed to save items:', error);
  }
};

// 아이템 삭제 함수
const deleteItem = async (index: number) => {
  items.value.splice(index, 1);
  await saveItems(); // 삭제된 후 백엔드에 저장
};
</script>

<style scoped>
.check-list-container {
  padding: 20px 20px 0px 20px;
  position: relative;
}

.check-list {
  border-radius: var(--radius-s);
  background-color: var(--color-card-surface);
}

.list-check {
  width: 20px;
  height: 20px;
  background-color: var(--color-neutral-700);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.list-check.active {
  border-style: solid;
  border-width: 1px;
  border-color: var(--color-green-500);
}

.list-content {
  display: flex;
  align-items: center;
  height: 52px;
  padding: var(--margin-s) var(--margin-m2);
  gap: 16px;
  position: relative;
}

.list-detail {
  color: var(--color-text-active);
  flex-grow: 1;
}

.transparent-input {
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--color-text-active);
  font-size: 1.5rem;
  width: 100%;
}

.edit-item-input {
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--color-text-active);
  font-size: 1.5rem;
  font-family: inherit; /* 기존 폰트 스타일과 일치 */
}

.menu-button {
  cursor: pointer;
  font-size: 3rem; /* 크기를 키움 */
  padding: 0 10px;
  color: var(--color-neutral-700);
}

.action-buttons {
  display: flex;
  gap: 10px; /* 간격 조정 */
}

.edit-button,
.delete-button {
  background-color: #333333;
  border: none;
  margin-top: 15px;
  color: var(--color-button-on-primary);
  padding: 3px 10px; /* 크기 조정 */
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.2rem; /* 폰트 크기 조정 */
}

.add-list {
  padding: var(--padding-m);
  border-radius: var(--radius-xl);
  gap: var(--spacing-1);
  background-color: var(--color-button-primary);
  width: 11.2rem;
  height: 4rem;
  left: 100%;
  bottom: 10px;
  margin-top: 10px;
  position: sticky;
  display: flex;
  align-items: center;
}

.editing-active {
  background-color: #1b1b1b; /* 더 진한 배경색 */
  font-weight: bold; /* 글자를 굵게 */
}
</style>
