import { AuthHeader } from "@/components/ui";
import { login } from "@/data";

function HeaderLogin() {
    const section = login.header;
    return (
        <AuthHeader
            title={ section.title }
        />
    )
}

export default HeaderLogin;