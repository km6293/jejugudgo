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
                  <el-input v-model="input" placeholder="변경할 정수를 입력해주세요." :style="{ width: '650px', height: '50px' }" />
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
                  <br>
                  <el-button type="primary" @click="getBaseNumber()">변환</el-button>
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

const checked1 = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);
const checked4 = ref(false);
const checked5 = ref(false);
const checked6 = ref(false);
const checked7 = ref(false);
const frombase = ref('');
const input = ref('');
const result = ref('');

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

const getBaseNumber = () => {
    let selectedBase;
    if (checked1.value) selectedBase = 2;
    else if (checked2.value) selectedBase = 4;
    else if (checked3.value) selectedBase = 8;
    else if (checked4.value) selectedBase = 10;
    else if (checked5.value) selectedBase = 16;
    else if (checked6.value) selectedBase = 32;
    else if (checked7.value) selectedBase = parseInt(frombase.value); // Parse the base from string to integer

    API.getBaseNumber(input.value, selectedBase)
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