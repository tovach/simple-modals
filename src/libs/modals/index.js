import './css/styles.scss'


class Modals {
  constructor(wrapperClassName, contentClassName, togglerClassName) {
    this.init();

    this.wrapperClassName = wrapperClassName;
    this.contentClassName = contentClassName;
    this.togglerClassName = togglerClassName;

    this.contentWrapper = document.querySelectorAll(this.wrapperClassName);
    this.content = document.querySelectorAll(this.contentClassName);
    this.togglers = document.querySelectorAll(this.togglerClassName);

    this.modal = document.querySelector(".modal");
    this.modalWrapper = document.querySelector(".modal__wrapper");
    this.modalCloseBtn = document.querySelector(".modal__close");
    this.modalInner = document.querySelector(".modal__inner");
  }

  currentElWrapper;
  currentElContent;

  init() {
    const HTML = `
    <div class="modal">
      <div class="modal__wrapper">
        <button class="modal__close" type="button"></button>
        <div class="modal__inner">
          
        </div>
      </div>
    </div>`;

    document.body.insertAdjacentHTML("beforeend", HTML);
  }

  setToggerListener() {
    this.togglers.forEach((el) => {
      el.addEventListener("click", (e) => {
        this.currentElContent = e.currentTarget.parentNode.querySelector(
          this.contentClassName
        );
        this.currentElWrapper = e.currentTarget.parentNode;
        this.showModal(this.currentElContent);
      });
    });
  }

  setModaListeners() {
    this.modalCloseBtn.addEventListener("click", () => {
      this.closeModal();
    });

    this.modal.addEventListener("click", () => {
      this.closeModal();
    });

    this.modalWrapper.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }

  showModal(el) {
    this.modal.classList.toggle("active");
    el.classList.remove("dn");
    this.modalInner.insertAdjacentElement("afterbegin", el);
    document.body.classList.add('scn')
  }

  closeModal() {
    this.modal.classList.remove("active");
    document.body.classList.remove('scn')

    this.modalInner.innerHTML = "";
    this.currentElWrapper.insertAdjacentElement(
      "beforeend",
      this.currentElContent
    );
    this.currentElContent.classList.add("dn");
  }

  render() {
    for (const [index, el] of this.contentWrapper.entries()) {
      el.querySelector(this.contentClassName).classList.add("dn");
      el.dataset.order = index;
    }

    this.setToggerListener();
    this.setModaListeners();
  }
}

export { Modals };
