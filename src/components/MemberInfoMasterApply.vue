<script setup>
import MemberInfoEditDialog from "@/components/MemberInfoEditDialog.vue";
import { defineProps, defineEmits, ref } from "vue";

const emit = defineEmits(["dialogFeedBack"]);

defineProps({
  dialogVisible: {
    type: Boolean,
    default: false,
  },
});

const handleClose = () => {
  emit("dialogFeedBack", false);
};

const editInfo = ref(false);

const dialogFeedBack = () => {
  editInfo.value = false;
};
</script>

<template>
  <el-dialog
    :model-value="dialogVisible"
    title="高手專區"
    width="100%"
    fullscreen
    center
    :before-close="handleClose"
  >
    <div class="content-body my-3 px-3">
      <div class="card rounded px-3 py-2 flex">
        <img
          class="member-info-head rounded"
          src="@/assets/image/banner.jpg"
          alt=""
        />
        <div class="text-left text-sm pl-2 pt-1">
          <div class="flex items-center justify-between">
            <div class="font-bold">史迪奇</div>
            <div>追隨數：<span>10</span></div>
          </div>
          <div>24H勝率：<span>99.32%</span></div>
          <div>24H獲利：<span>99.32%</span></div>

          <div class="flex items-end justify-between">
            <span class="font-bold text-sm"
              >專職合約操盤的星際寶貝 想賺錢跟我來就對了</span
            >
            <el-icon class="text-white text-2xl" @click="editInfo = true"
              ><edit
            /></el-icon>
          </div>
        </div>
      </div>
      <div class="mt-3 mb-5 mx-4 grid justify-items-center content-center">
        <div class="text-xl text-center mb-2">你也想成為被追隨的高手嗎?</div>
        <div class="text-xl text-center mb-2">只要您符合其中一項要求</div>
        <div class="text-xl text-center mb-2">按下送出申請即可</div>
        <div class="text-xl text-center mb-2">
          我們會在3日內開始為您審核資格
        </div>
        <ol class="pl-10">
          <li class="mb-2">
            <div>現貨 or 合約，單幣種30日總獲利達15%。</div>
            <div class="text-xs text-gray-400">
              (達到資格系統會自動開啟”開放追隨”功能)
            </div>
          </li>
          <li class="mb-2">
            <div>現貨 or 合約，單幣種30日獲勝率達75%。</div>
            <div class="text-xs text-gray-400">
              (達到資格系統會自動開啟”開放追隨”功能)
            </div>
          </li>
          <li class="mb-2">
            <div>
              準備好您的金融專業資格證明文件及資歷 發送信件到
              <a
                class="text-green-900 font-medium"
                href="mailto: Master@aihunter.net"
                >Master@aihunter.net</a
              >。
            </div>
            <div class="text-xs text-gray-400">
              (人工審核，需3~7個工作日，請耐心等待)
            </div>
          </li>
          <li class="mb-2">
            <div>獲得系統自動邀請，輸入系統推薦碼。</div>
            <div class="text-xs text-gray-400">
              (輸入有效推薦碼，將立即啟用)
            </div>
          </li>
        </ol>
        <div class="py-3">
          <el-input placeholder="輸入推廣碼" />
        </div>
      </div>
    </div>
    <template #footer>
      <div class="flex items-center justify-around">
        <el-button class="theme-bg-color w-2/5">送出申請</el-button>
        <el-button class="import-color w-2/5" @click="handleClose">取消</el-button>
      </div>
    </template>
  </el-dialog>
  <MemberInfoEditDialog
    :dialogVisible="editInfo"
    @dialogFeedBack="dialogFeedBack"
  />
</template>

<style lang="scss" scoped>
ol li {
  list-style: korean-hanja-informal;
}
</style>
