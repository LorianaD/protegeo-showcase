import { AuthHeader } from "@/components/ui";
import { loginHeader } from "@/data";

function HeaderLogin() {
    return (
        <AuthHeader
            title={loginHeader.title}
        />
    )
}

export default HeaderLogin;