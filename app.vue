<template>
<div class="container container--landing">
  <Logo />
  <div class="contact">
    <ul class="contact__list">
      <li class="contact__item">Maurits Meester</li>
      <li class="contact__item">Developer</li>
      <li class="contact__item">Innovation consultant</li>
    </ul>
    <ul class="contact__list">
      <li class="contact__item">
        <a class="contact__link" href="tel:0031613757305">+31 6 137 57 305</a>
      </li>
      <li class="contact__item">
        <a class="contact__link" href="mailto:maurits@e-mmer.nl">
          maurits@e-mmer.nl
        </a>
      </li>
    </ul>
    <ul class="contact__list">
      <li class="contact__item">
        <a
          class="contact__link"
          title="Github: Maurits Meester"
          target="_blank"
          href="https://github.com/mmeester"
          >Github</a
        >
      </li>
      <li class="contact__item">
        <a
          class="contact__link"
          title="Linkedin: Maurits Meester"
          target="_blank"
          href="https://www.linkedin.com/in/mauritsmeester/"
          >Linkedin</a
        >
      </li>
      <li class="contact__item">
        <a
          class="contact__link"
          title="Twitter: Maurits Meester"
          target="_blank"
          href="https://twitter.com/mmeester"
          >Twitter</a
        >
      </li>
      <li class="contact__item">
        <a
          class="contact__link"
          title="Instagram: Maurits Meester"
          target="_blank"
          href="https://www.instagram.com/mmeester/"
          >Instagram</a
        >
      </li>
    </ul>
  </div>
</div>
<PoweredByNuxt class="powered"/>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/variables";
.container{
  // general page styles
  &--landing {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.logo {
  width: auto;
  height: 10.4vw;

  @media #{$medium-down} {
    height: auto;
    width: 83.3vw;
  }
  @media #{$small-only} {
    margin-bottom: 20px;
  }
}

.contact {
  color: $text-color;
  &__list {
    display: flex;
    flex-flow: row wrap;
    margin: 0;
    padding: 0;
    list-style: none;
    @media #{$small-only} {
      margin-bottom: 20px;
      display: block;

      &:last-child {
        margin: 0;
      }
    }
  }
  &__item {
    display: block;
    padding: 0 10px 0 0;
    line-height: 2;

    @media #{$small-only} {
      display: block;
      padding: 0 0 0 20px;
    }
    &:before {
      position: absolute;
      display: none;
      right: 100%;
      transform: translateX(100%);
      content: '';
      @media #{$small-only} {
        display: block;
        content: '\2014';
      }
    }
    &:after {
      content: '| ';
      padding-left: 10px;
      @media #{$small-only} {
        content: '';
        padding: 0;
      }
    }
    &:last-child:after {
      content: '';
    }
  }
  &__link {
    color: $text-color;
  }
}

.powered {
  position: fixed;
  right: 20px;
  bottom: 20px;
  color: $text-color;
}
</style>

