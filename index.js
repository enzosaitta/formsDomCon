function main() {
  let formEl = document.querySelector(".contact-form");

  formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const objeto = Object.fromEntries(formData.entries());

    objeto["mosnt-diff-subjects"] = formData.getAll("mosnt-diff-subjects");
    console.log(objeto);
  });
}
main();
