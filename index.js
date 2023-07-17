const validateUser = async (email) => {
  try {
    const result = await fetch(
      `https://wallet-app-api-6e6f770c9f15.herokuapp.com/users?email=${email}`
    );
    const user = await result.json();
    return user;
  } catch (error) {
    return { error };
  }
};

const onClickLogin = async () => {
  const email = document.getElementById("input-email").value;
  if (email.length < 5 || !email.includes("@")) {
    alert("Email inválido!");
    return;
  }
  const result = await validateUser(email);
  console.log(result);
  if (result.error) {
    alert("Falha ao validar e-mail");
    return;
  }
  localStorage.setItem("@WalletApp:userEmail", result.email);
  localStorage.setItem("@WalletApp:userName", result.name);
  localStorage.setItem("@WalletApp:userId", result.id);
  window.open("./src/pages/home/index.html", "_self");
};
