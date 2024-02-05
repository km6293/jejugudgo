<template>
  <div>
    <div class="px-5 py-5 container-fluid">
      <div class="card">
        <div class="card-body">
          <h5>
            비트 연산
            <small>
              <p>
                비트 연산은 컴퓨터에서 이진수로 표현된 데이터를 조작하는 데 사용되는 연산입니다. 이 연산은 비트 단위로 수행되며, 각 비트에 대해 AND, OR, XOR, NOT 등의 논리 연산이나 시프트 연산을 수행할 수 있습니다.
              </p>
            </small>
          </h5>
          <br>
          <el-input v-model="input1" placeholder="첫 번째 이진수를 입력해주세요." :style="{ width: '650px', height: '50px' }" />
          <br>
          <br>
          <el-input v-model="input2" placeholder="두 번째 이진수를 입력해주세요." :style="{ width: '650px', height: '50px' }" />
          <br>
          <br>
          <el-checkbox v-model="checked1" label="AND" size="large" @change="handleCheckboxChange(1)" />
          <el-checkbox v-model="checked2" label="OR" size="large" @change="handleCheckboxChange(2)" />
          <el-checkbox v-model="checked3" label="XOR" size="large" @change="handleCheckboxChange(3)" />
          <br>
          <br>
          <el-button type="primary" @click="performBitOperation">연산</el-button>
          <br>
          <br>
          <el-input v-model="result" disabled :style="{ width: '650px', height: '50px' }" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import * as API from "@/api/api";

const input1 = ref('');
const input2 = ref('');
const checked1 = ref(false);
const checked2 = ref(false);
const checked3 = ref(false);
const result = ref('');

const handleCheckboxChange = (clickedCheckbox) => {
  if (clickedCheckbox !== 1) checked1.value = false;
  if (clickedCheckbox !== 2) checked2.value = false;
  if (clickedCheckbox !== 3) checked3.value = false;
}

const performBitOperation = () => {
  let type = '';
  if (checked1.value) type = 'AND';
  else if (checked2.value) type = 'OR';
  else if (checked3.value) type = 'XOR';

  API.getBit(input1.value, input2.value, type)
    .then((res) => {
      result.value = res.data;
    })
}
</script>

<style scoped>
.el-input {
  width: 200px;
}
</style>
