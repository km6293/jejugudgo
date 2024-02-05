<template>
  <div>
    <div class="px-5 py-5 container-fluid">
      <div class="card">
        <div class="card-body">
          <div style="display: left; justify-content: left;">
            <el-space :size="size" spacer="|" style="margin: 0 auto;">
              <el-button @click="type = 'binary'; clearInput()">Binary</el-button>
              <el-button @click="type = 'graycode'; clearInput()">GrayCode</el-button>
              <el-button @click="type = 'bcdcode'; clearInput()">BCDCode</el-button>
              <el-button @click="type = 'hammingcode'; clearInput()">HammingCode</el-button>
              <el-button @click="type = 'paritybit'; clearInput()">ParityBit</el-button>
            </el-space>
          </div>
          <br />
          <div v-if="type === 'binary'">
            <h5>
              바이너리 계산기
              <small>
                <p>
                  바이너리 코드는 컴퓨터에서 정보를 표현하는 데 사용되는 이진수 체계입니다. 이진수 체계는 0과 1 두 가지 숫자로만 표현되는데, 컴퓨터의 디지털 전자 회로에서는 전기 신호의 온/오프 상태로 0과 1을 표현합니다. 이러한 0과 1의 조합을 사용하여 컴퓨터는 데이터를 저장하고 처리합니다.
                </p>
              </small>
            </h5>
            <br>
            <el-input v-model="input" placeholder="변경할 정수를 입력해주세요." :style="{ width: '650px', height: '50px' }" />
            <br>
            <br>
            <el-button type="primary" @click="getBinary()">변환</el-button>
            <br>
            <br>
            <el-input v-model="result" disabled :style="{ width: '650px', height: '50px' }" />
          </div>
          <div v-if="type === 'graycode'">
            <h5>
              그레이코드 계산기
              <small>
                <p>
                  그레이 코드(Gray code)는 이진수를 표현하는 방법 중 하나로, 연속하는 두 개의 값 사이에 한 비트만 변경되는 순서로 숫자를 나타냅니다. 이진수를 그레이 코드로 변환하면 연속하는 두 개의 값 사이에 한 비트만 변경되기 때문에 잡음이나 오류에 대해 더 희생적이고 안정적인 표현이 됩니다. 그레이 코드는 회로 설계 및 디지털 통신에서 사용되며, 이진수를 사용하는 경우에도 그레이 코드로 변환하여 노이즈에 덜 민감하고 안정적인 전송을 할 수 있습니다.
                </p>
              </small>
            </h5>
            <br>
            <el-input v-model="input" placeholder="변경할 정수를 입력해주세요." :style="{ width: '650px', height: '50px' }" />
            <br>
            <br>
            <el-button type="primary" @click="getGrayCode()">변환</el-button>
            <br>
            <br>
            <el-input v-model="result" disabled :style="{ width: '650px', height: '50px' }" />
          </div>
          <div v-if="type === 'bcdcode'">
            <h5>
              BCD코드 계산기
              <small>
                <p>
                  BCD 코드는 주로 디지털 시스템에서 십진수를 표현하고 처리하는 데 사용됩니다. 예를 들어, 디지털 시계나 계산기와 같은 장치에서 사용될 수 있습니다. 이진수보다 더 직관적이고 쉽게 읽을 수 있으며, 10진수와의 변환도 간단하게 이루어집니다.
                </p>
              </small>
            </h5>
            <br>
            <el-input v-model="input" placeholder="변경할 정수를 입력해주세요." :style="{ width: '650px', height: '50px' }" />
            <br>
            <br>
            <el-button type="primary" @click="getBCDCode()">변환</el-button>
            <br>
            <br>
            <el-input v-model="result" disabled :style="{ width: '650px', height: '50px' }" />
          </div>
          <div v-if="type === 'paritybit'">
            <h5>
              패리티비트 계산기
              <small>
                <p>
                  패리티 비트(Parity bit)는 데이터 전송 중에 오류를 검출하기 위해 사용되는 비트입니다. 주어진 데이터의 이진수 표현에서 패리티 비트는 데이터 비트들의 합이 홀수 또는 짝수가 되도록 설정됩니다.
                </p>
              </small>
            </h5>
            <br>
            <el-input v-model="input" placeholder="변경할 정수를 입력해주세요." :style="{ width: '650px', height: '50px' }" />
            <br>
            <br>
            <el-button type="primary" @click="getParityBit()">변환</el-button>
            <br>
            <br>
            <el-input v-model="result" disabled :style="{ width: '650px', height: '50px' }" />
          </div>
          <div v-if="type === 'hammingcode'">
            <h5>
              해밍코드 계산기
              <small>
                <p>
                  해밍 코드는 데이터 전송 중에 발생할 수 있는 오류를 감지하고 수정하는 데 사용되는 에러 수정 코드입니다. 해밍 코드는 추가된 패리티 비트를 통해 데이터의 일부 비트가 손상되었는지를 확인하고 수정할 수 있습니다.
                </p>
              </small>
            </h5>
            <br>
            <el-input v-model="input" placeholder="변경할 정수를 입력해주세요." :style="{ width: '650px', height: '50px' }" />
            <br>
            <br>
            <el-button type="primary" @click="getHammingCode()">변환</el-button>
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
const type = ref('binary');
const result = ref('');

const getBinary = () => {
    API.getBinary(input.value)
        .then((res) => {
          result.value = res.data;
        })
}

const getGrayCode = () => {
    API.getGrayCode(input.value)
        .then((res) => {
          result.value = res.data;
        })
}

const getBCDCode = () => {
    API.getBCDCode(input.value)
        .then((res) => {
          result.value = res.data;
        })
}

const getParityBit = () => {
    API.getParityBit(input.value)
        .then((res) => {
          result.value = res.data;
        })
}

const getHammingCode = () => {
    API.getHammingCode(input.value)
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