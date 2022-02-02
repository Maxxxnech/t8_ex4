import React from "react";
import { Drawer, Typography } from "@mui/material";

export default function Info({isInfoOpen, closeInfo = Function.prototype}){

    return(
        <Drawer
           anchor="bottom"
           open={isInfoOpen}
           onClose={closeInfo}
        >
            <Typography variant="body1" color="inherit">
            Композиция в ООП - это тип отношений при котором один объект может принадлежать только другому объекту и никому другому.
            При композиции образуется сильная связь между объектами. 
            При таком типе отношений основной объект полностью обеспечивает жизненный цикл объектов от которых он зависит.
            </Typography>
        </Drawer>
    )
}