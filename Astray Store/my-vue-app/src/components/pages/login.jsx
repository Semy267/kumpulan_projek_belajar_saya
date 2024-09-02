import FormLogin from "../fragments/formLogin";
import AuthLayout from "../layouts/authLayout";

export default function Login() {
    return (
        <AuthLayout title="Masuk" type="Masuk" para="Silahkan sebelum masuk terlebih dahulu isi form di bawah">
            <FormLogin />
        </AuthLayout>
    )
}