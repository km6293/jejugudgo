<template>
  <div>
    <div class="px-5 py-5 container-fluid">
      <div class="card">
        <div class="card-body">
          <h5>
            서브넷 마스크 계산
            <small>
              <p>
                서브넷 마스크는 IP 주소를 서브넷(네트워크 세그먼트)으로 분할하는 데 사용되는 32비트 숫자입니다. 이것은 네트워크 주소 부분과 호스트 주소 부분을 구분하는 역할을 합니다.
              </p>
            </small>
          </h5>
          <br>
          <el-input v-model="ip" placeholder="IP" :style="{ width: '300px', height: '50px' }" />
          &nbsp;
          <el-input v-model="subnet" placeholder="Subnet" :style="{ width: '300px', height: '50px' }" />
          <br>
          <br>
          <br>
          <el-button type="primary" @click="getSubnet">계산</el-button>
          <br>
          <br>
          Network: <el-input v-model="result[0]" disabled :style="{ width: '300px', height: '40px' }" />
          <br>
          <br>
          Host:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <el-input v-model="result[1]" disabled :style="{ width: '300px', height: '40px' }" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import * as API from "@/api/api";

const ip = ref('');
const subnet = ref('');
const result = ref('');

const getSubnet = () => {
API.getSubnet(ip.value, subnet.value)
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
