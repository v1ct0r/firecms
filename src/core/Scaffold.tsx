import React, { PropsWithChildren } from "react";

import { Drawer as MuiDrawer, Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { Drawer as FireCMSDrawer, DrawerProps } from "./Drawer";
import { FireCMSAppBar } from "./internal/FireCMSAppBar";
import { useNavigation } from "../hooks";
import { CircularProgressCenter } from "./components";


/**
 * @category Core
 */
export interface ScaffoldProps {

    /**
     * Name of the app, displayed as the main title and in the tab title
     */
    name: string;

    /**
     * Logo to be displayed in the drawer of the CMS
     */
    logo?: string;

    /**
     * A component that gets rendered on the upper side of the main toolbar
     */
    toolbarExtraWidget?: React.ReactNode;

    /**
     * In case you need to override the view that gets rendered as a drawer
     * @see FireCMSDrawer
     */
    Drawer?: React.ComponentType<DrawerProps>;

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {
            display: "flex",
            flexDirection: "column",
            width: "100vw",
            height: "100vh"
        },
        content: {
            flexGrow: 1,
            width: "100%",
            height: "100%",
            overflow: "auto"
        },
        drawerPaper: {
            width: 280
        }
    })
);

/**
 * This view acts as a scaffold for FireCMS.
 *
 * It is in charge of displaying the navigation drawer, top bar and main
 * collection views.
 * This component needs a parent {@link FireCMS}
 *
 * @param props
 * @constructor
 * @category Core
 */
export function Scaffold(props: PropsWithChildren<ScaffoldProps>) {

    const {
        children,
        name,
        logo,
        toolbarExtraWidget,
        Drawer
    } = props;

    const classes = useStyles();

    const navigationContext = useNavigation();
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);
    const closeDrawer = () => setDrawerOpen(false);

    const UsedDrawer = Drawer || FireCMSDrawer;

    return (

        <>
            <nav>
                <MuiDrawer
                    variant="temporary"
                    anchor={"left"}
                    open={drawerOpen}
                    onClose={closeDrawer}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    ModalProps={{
                        keepMounted: true
                    }}
                >
                    {!navigationContext.navigation ? <CircularProgressCenter/> : <UsedDrawer logo={logo} closeDrawer={closeDrawer}/>}

                </MuiDrawer>
            </nav>

            <div className={classes.main}>

                <FireCMSAppBar title={name}
                               handleDrawerToggle={handleDrawerToggle}
                               toolbarExtraWidget={toolbarExtraWidget}/>
                <main
                    className={classes.content}>
                    {children}
                </main>
                <div style={{
                    height: "40px",
                    width: "100%",
                    backgroundColor: "#3D8B76",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    padding: "0 20px",
                    color: "#fff",
                    fontWeight: "500"
                }}>
                    © 2015-{new Date().getFullYear()} Neuro-Eye Diagnostic Systems LLC. Patent No. 11,369,263
                </div>
            </div>

        </>
    );


}

