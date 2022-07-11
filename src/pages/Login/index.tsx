import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../services/MainApi/login";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/modules/user";
import { banner } from "../../assets/images";

export default function Login(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const dispatch = useDispatch();

  const submit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await login({ email, senha });

      dispatch(
        setUser({
          token: response.data,
          email,
        })
      );

      alert("Deu certo");
    } catch (error) {
      alert("Deu algo errado");
    }
  };
  return (
    <main className="row p-5">
      <section className="col-6">
        <img className="img-fluid" src={banner} alt="" />
      </section>
      <section className="col-6 card my-5 p-5">
        <h1>Login Psicologo</h1>
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="form-control"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Senha
            </label>
            <input
              id="password"
              type="password"
              className="form-control"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Logar
            </button>
          </div>
        </form>
        <Link to="/lista">ir pra lista</Link>
      </section>
    </main>
  );
}
