<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="textarea" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <button type="primary" @click="submitForm('ruleForm')">提交表单</button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import elForm from "./components/el-form";
import elFormItem from "./components/el-form-item";
import elInput from "./components/el-input";

export default {
  components: {
    elForm,
    elFormItem,
    elInput
  },
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符" }
        ],
        password: [
          { required: true, message: "请输入密码" }
        ]
      }
    };
  },
  methods: {
    submitForm(ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>