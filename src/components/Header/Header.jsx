import React from "react";
import { useResponsiveView } from "@/utils/customHooks";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

function Header() {
    const isMobileView_900 = useResponsiveView(900);

    return isMobileView_900 ? <MobileHeader /> : <DesktopHeader />;
}

export default Header;
