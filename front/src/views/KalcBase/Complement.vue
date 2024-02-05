<template>
  <div>
    <div class="px-5 py-5 container-fluid">
      <div class="card">
        <div class="card-body">
          <div style="display: left; justify-content: left;">
            <el-space :size="size" spacer="|" style="margin: 0 auto;">
              <el-button @click="type = '1'; clearInput()">1의 보수</el-button>
              <el-button @click="type = '2'; clearInput()">2의 보수</el-button>
            </el-space>
          </div>
          <br />
          <div v-if="type === '1'">
            <h5>
              1의 보수 계산기
              <small>
                <p>
                  1의 보수는 음수를 표현할 때 이진수의 각 비트를 반전하는 방법입니다. 즉, 양수를 나타내는 이진수의 각 비트 값이 0인 경우 1로, 1인 경우 0으로 바꿔줍니다. 이런 방식으로 음수를 표현하면 양수와 음수 간에 비트 단위로 반전되는 특성을 가집니다.
                </p>
              </small>
            </h5>
            <br>
            <el-input v-model="input" placeholder="변경할 정수를 입력해주세요." :style="{ width: '650px', height: '50px' }" />
            <br>
            <br>
            <el-button type="primary" @click="getOneComplement()">변환</el-button>
            <br>
            <br>
            <el-input v-model="result" disabled :style="{ width: '650px', height: '50px' }" />
          </div>
          <div v-if="type === '2'">
            <h5>
              2의 보수 계산기
              <small>
                <p>
                  2의 보수는 1의 보수에 1을 더하는 방법으로 양수를 음수로 변환하는 방법입니다. 이것은 음수를 나타내는 이진수의 각 비트를 1의 보수로 구한 후 1을 더하여 얻을 수 있습니다. 이 방식은 음수와 양수 간의 덧셈과 뺄셈 연산을 보다 간편하게 처리할 수 있도록 해줍니다.
                </p>
              </small>
            </h5>
            <br>
            <el-input v-model="input" placeholder="변경할 정수를 입력해주세요." :style="{ width: '650px', height: '50px' }" />
            <br>
            <br>
            <el-button type="primary" @click="getTwoComplement()">변환</el-button>
            <br>
            <br>
            <el-input v-model="result" disabled :style="{ width: '650px', height: '50px' }" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import * as API from "@/api/api";

const input = ref('');
const type = ref('1');
const result = ref('');

const getOneComplement = () => {
    API.getOneComplement(input.value)
        .then((res) => {
          result.value = res.data;
        })
}

const getTwoComplement = () => {
    API.getTwoComplement(input.value)
        .then((res) => {
          result.value = res.data;
        })
}

const clearInput = () => {
  input.value = '';
  result.value = '';
};
</script>

<style scoped>
  .el-input {
  width: 200px;
  }
</style>