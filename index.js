const validateUser = async (email) => {
  const result = await fetch(
    `https://mp-wallet-app-api.herokuapp.com/users?email=${email}`
  );
  console.log({ result });
};

const onClickLogin = async () => {
  const email = document.getElementById("input-email").value;
  if (email.length < 5 || !email.includes("@")) {
    alert("Email inválido!");
    return;
  }
  const result = await validateUser(email);
  // localStorage.setItem("@WalletApp:userEmail", email);
  // window.open("./src/pages/home/index.html", "_self");
};
