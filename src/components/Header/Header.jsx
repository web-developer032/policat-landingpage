import React from "react";
import { useResponsiveView } from "@/utils/customHooks";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

function Header() {
    const isMobileView_800 = useResponsiveView(800);

    return isMobileView_800 ? <MobileHeader /> : <DesktopHeader />;
}

export default Header;
