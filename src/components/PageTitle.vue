<template functional>
  <div class="page-title">
    <h1 class="page-title__title">
      <slot></slot>
    </h1>
    <div class="page-title__buttons">
      <slot name="buttons"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .page-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    &__title {
      font-size: 48px;
    }
  }

  @media (max-width: 1200px) {
    .page-title {
      flex-direction: column;

      &__title {
        margin-bottom: 20px;
      }
    }
  }

  @media (max-width: 630px) {
    .page-title {
      &__buttons {
        display: flex;
      }
    }
  }

  @media (max-width: 430px) {
    .page-title {
      &__buttons {
        display: flex;
        flex-direction: column;
      }
    }
  }

  @media (max-width: 480px) {
    .page-title__title {
      font-size: 10vw;
    }
  }
</style>