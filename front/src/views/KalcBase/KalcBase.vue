<template>
  <div>
      <div class="px-5 py-5 container-fluid">
          <div class="card">
              <div class="card-body">
                  <h5>
                      진법 계산기
                      <small>
                      <p>
                          2진수, 8진수, 10진수, 16진수, 32진수 등 여러 진수를 계산합니다.
                      </p>
                      </small>
                  </h5>
                  <br>
                  <el-checkbox v-model="checked1" label="2진법" size="large" @change="toggleOption(1)" />
                  <el-checkbox v-model="checked2" label="4진법" size="large" @change="toggleOption(2)" />
                  <el-checkbox v-model="checked3" label="8진법" size="large" @change="toggleOption(3)" />
                  <el-checkbox v-model="checked4" label="10진법" size="large" @change="toggleOption(4)" />
                  <el-checkbox v-model="checked5" label="16진법" size="large" @change="toggleOption(5)" />
                  <el-checkbox v-model="checked6" label="32진법" size="large" @change="toggleOption(6)" />
                  <el-checkbox v-model="checked7" label="N 진법" size="large" @change="toggleOption(7)" /> &nbsp;
                  <el-input v-if="checked7" v-model="frombase" placeholder="현재 적용되어있는 진법" />
                  <br>
                  <el-input v-model="input" placeholder="변경할 숫자를 입력해주세요." :style="{ width: '650px', height: '50px' }" />
                  <br>
                  <br>
                  <br>
                  <el-checkbox v-model="checked8" label="2진법" size="large" @change="toggleOption2(8)" />
                  <el-checkbox v-model="checked9" label="4진법" size="large" @change="toggleOption2(9)" />
                  <el-checkbox v-model="checked10" label="8진법" size="large" @change="toggleOption2(10)" />
                  <el-checkbox v-model="checked11" label="10진법" size="large" @change="toggleOption2(11)" />
                  <el-checkbox v-model="checked12" label="16진법" size="large" @change="toggleOption2(12)" />
                  <el-checkbox v-model="checked13" label="32진법" size="large" @change="toggleOption2(13)" />
                  <el-checkbox v-model="checked14" label="N 진법" size="large" @change="toggleOption2(14)" /> &nbsp;
                  <el-input v-if="checked14" v-model="tobase" placeholder="현재 적용되어있는 진법" />
                  <br>
                  <el-input v-model="input" disabled :style="{ width: '650px', height: '50px' }" />
              </div>
          </div>
      </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const checked1 = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);
const checked4 = ref(false);
const checked5 = ref(false);
const checked6 = ref(false);
const checked7 = ref(false);
const checked8 = ref(true);
const checked9 = ref(false);
const checked10 = ref(false);
const checked11 = ref(false);
const checked12 = ref(false);
const checked13 = ref(false);
const checked14 = ref(false);
const frombase = ref('');
const tobase = ref('');
const input = ref('');

const toggleOption = (option) => {
  checked1.value = false;
  checked2.value = false;
  checked3.value = false;
  checked4.value = false;
  checked5.value = false;
  checked6.value = false;
  checked7.value = false;

  switch (option) {
    case 1:
      checked1.value = true;
      break;
    case 2:
      checked2.value = true;
      break;
    case 3:
      checked3.value = true;
      break;
    case 4:
      checked4.value = true;
      break;
    case 5:
      checked5.value = true;
      break;
    case 6:
      checked6.value = true;
      break;
    case 7:
      checked7.value = true;
      break;
    default:
      break;
  }
}
const toggleOption2 = (option) => {
  checked8.value = false;
  checked9.value = false;
  checked10.value = false;
  checked11.value = false;
  checked12.value = false;
  checked13.value = false;
  checked14.value = false;

  switch (option) {
    case 8:
      checked8.value = true;
      break;
    case 9:
      checked9.value = true;
      break;
    case 10:
      checked10.value = true;
      break;
    case 11:
      checked11.value = true;
      break;
    case 12:
      checked12.value = true;
      break;
    case 13:
      checked13.value = true;
      break;
    case 14:
      checked14.value = true;
      break;
    default:
      break;
  }
};
</script>

<style scoped>
  .el-input {
  width: 200px;
  }
</style>
