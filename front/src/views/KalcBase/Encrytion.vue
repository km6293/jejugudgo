<template>
  <div>
      <div class="px-5 py-5 container-fluid">
          <div class="card">
              <div class="card-body">
                <div style="display: left; justify-content: left;">
                  <el-space :size="size" spacer="|" style="margin: 0 auto;">
                    <el-button @click="type = 'encryption'; clearInput()">암호화</el-button>
                    <el-button @click="type = 'decryption'; clearInput()">복호화</el-button>
                  </el-space>
                </div>
                <br>
                <div v-if="type === 'encryption'">
                  <h5>
                      카이사르 암호화
                      <small>
                      <p>
                        카이사르 암호(Caesar Cipher)는 가장 간단한 치환 암호 중 하나입니다. 이 암호는 알파벳을 특정한 거리만큼 밀어서 다른 알파벳으로 치환하는 방식으로 작동합니다.
                      </p>
                      </small>
                  </h5>
                  <br>
                  <el-input v-model="input" placeholder="변경할 문자열을 입력해주세요." :style="{ width: '650px', height: '50px' }" />
                  <br>
                  <br>
                  <el-button type="primary" @click="getEncryption()">변환</el-button>
                  <br>
                  <br>
                  <el-input v-model="result" disabled :style="{ width: '650px', height: '50px' }" />
                </div>
                <div v-if="type === 'decryption'">
                  <h5>
                      카이사르 복호화
                      <small>
                      <p>
                        카이사르 암호(Caesar Cipher)는 가장 간단한 치환 암호 중 하나입니다. 이 암호는 알파벳을 특정한 거리만큼 밀어서 다른 알파벳으로 치환하는 방식으로 작동합니다.
                      </p>
                      </small>
                  </h5>
                  <br>
                  <el-input v-model="input" placeholder="변경할 문자열을 입력해주세요." :style="{ width: '650px', height: '50px' }" />
                  <br>
                  <br>
                  <el-button type="primary" @click="getDecryption()">변환</el-button>
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
const result = ref('');
const type = ref('encryption')

const getEncryption = () => {
    API.getEncryption(input.value)
        .then((res) => {
          result.value = res.data;
        })
}

const getDecryption = () => {
    API.getDecryption(input.value)
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