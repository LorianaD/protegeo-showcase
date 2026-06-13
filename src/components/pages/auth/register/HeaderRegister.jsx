import { AuthHeader } from "@/components/ui";
import { registerHeader } from "@/data";

function HeaderRegister() {
    return (
        <AuthHeader
            title={ registerHeader.title }
        />
    )
}

export default HeaderRegister;