/*
@node_command.js Copyright (c) 2023 Jalasoft
2643 Av Melchor Perez de Olguin, Colquiri Sud, Cochabamba, Bolivia.
Av. General Inofuentes esquina Calle 20, Edificio Union No 1376, La Paz, Bolivia All rights reserved
This software is the confidential and proprietary information of
Jalasoft, Confidential Information "). You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into with Jalasoft
*/

import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import BugReportIcon from '@mui/icons-material/BugReport';
import VideoCallIcon from '@mui/icons-material/VideoCall';

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
        active={selected === title}
        style={{
            color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
        >
        <Typography>{title}</Typography>
        <Link to={to} />
        </MenuItem>
    );
};

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
            background: `${colors.primary[400]} !important`,
            position: "fixed",
        },
        "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
            color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
            color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                    JALASOFT
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src={`../../assets/user.jpg`}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                >
                    Pepito
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                    Perez
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
                title="Dashboard"
                to="/"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
            />

            <Item
                title="Profile Form"
                to="/form"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
            />

            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >

              Meeting
            </Typography>

            <Item
              title="New meeting"
              to="/meeting"
              icon={<VideoCallIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Interviews
                Interviews
            </Typography>

            <Item
                title="Informative Interview"
                to="/interview"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
            />
            
            <Item
                title="Psicologic Interview"
                to="/interview"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
            />

            <Item
                title="English Interview"
                to="/interview"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
            />

            <Typography
                variant="h5"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
            >
              Test
            </Typography>
            <Item
                title="Aptitude Tests"
                to="/aptitude"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
            />
            <Item
                title="Reasoning Tests"
                to="/reasoning"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
            />
            <Item
                title="Logical Tests"
                to="/logical"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
            />
            <Item
                title="Spatial Tests"
                to="/spatial"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
            />
            <Item
                title="Concentration Tests"
                to="/concentration"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
            />
            <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
                >
                Workshops
            </Typography>
            <Item
                title="Workshop 1"
                to="/workshop"
                icon={<BugReportIcon />}
                selected={selected}
                setSelected={setSelected}
            />
            <Item
                title="Workshop 2"
                to="/workshop"
                icon={<BugReportIcon />}
                selected={selected}
                setSelected={setSelected}
            />
            <Item
                title="FAQ Page"
                to="/faq"
                icon={<HelpOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;