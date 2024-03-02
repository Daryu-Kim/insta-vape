<template>
  <div class="footer">
    <ul>
      <li><RouterLink to="/information">소개</RouterLink></li>
      <li><RouterLink to="/help">도움말</RouterLink></li>
      <li><RouterLink to="/recruit">채용 정보</RouterLink></li>
      <li><RouterLink to="/privacy">개인정보처리방침</RouterLink></li>
      <li><RouterLink to="/terms">약관</RouterLink></li>
      <li><RouterLink to="/location">위치</RouterLink></li>
      <li>INNOBITE Verified.</li>
    </ul>
    <p>© 2024 INSTAVAPE FROM INNOBITE</p>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  > ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    list-style: none;
  }

  > p {
    margin-top: 1.6rem;
  }
  * {
    font-size: 1.2rem;
    color: var(--secondary);
  }
}
</style>

<script setup lang="ts"></script>
