import { BiArrowBack } from "react-icons/bi";
import Authenticated from "../../../components/Authenticated";
import { Link } from "react-router-dom";

const MemberDetail = () => {
  return (
    <section className="container mt-20">
      <Link to="/app/events" className="text-zinc-400 flex gap-2 mb-5">
        <BiArrowBack size={24} />
        Volver
      </Link>
      <h1 className="text-3xl font-bold">Juan Perez #123456</h1>
      <p className="text-lg text-zinc-500">
        12/12/2024 - 12:00 PM
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
        fermentum libero. Integer sit amet mauris ac purus feugiat
        fermentum. Nullam nec turpis
      </p>
    </section>
  );
}

const AuthMemberDetail = Authenticated(MemberDetail);
export default AuthMemberDetail;