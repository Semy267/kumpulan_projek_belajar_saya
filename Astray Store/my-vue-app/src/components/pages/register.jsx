import FormRegister from "../fragments/formRegister";
import AuthLayout from "../layouts/authLayout";

export default function Register() {
    return (
        <AuthLayout title="Pendaftaran Akun" type="Daftar" para="Silahkan sebelum masuk terlebih dahulu isi form di bawah">
            <FormRegister />
        </AuthLayout>
    )
}