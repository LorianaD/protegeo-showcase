import { AuthHeader } from "@/components/ui";
import { register } from "@/data";

function HeaderRegister() {
    const section = register.header;
    return (
        <AuthHeader
            title={ section.title }
        />
    )
}

export default HeaderRegister;