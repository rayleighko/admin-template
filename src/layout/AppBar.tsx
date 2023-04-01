import SettingsIcon from "@mui/icons-material/Settings"
import {
  Box,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Theme,
  useMediaQuery,
} from "@mui/material"
import { forwardRef } from "react"
import {
  AppBar,
  Logout,
  TitlePortal,
  UserMenu,
  useTranslate,
  useUserMenu,
} from "react-admin"
import { Link } from "react-router-dom"

import Logo from "./Logo"

const ConfigurationMenu = forwardRef<HTMLAnchorElement>((props, ref) => {
  const translate = useTranslate()
  const { onClose } = useUserMenu()

  return (
    <MenuItem
      component={Link}
      ref={ref}
      {...props}
      to="/configuration"
      onClick={onClose}>
      <ListItemIcon>
        <SettingsIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText>{translate("pos.configuration")}</ListItemText>
    </MenuItem>
  )
})
const CustomUserMenu = () => (
  <UserMenu>
    <ConfigurationMenu />
    <Logout />
  </UserMenu>
)

const CustomAppBar = () => {
  const isLargeEnough = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.up("sm"),
  )
  return (
    <AppBar color="secondary" elevation={1} userMenu={<CustomUserMenu />}>
      <TitlePortal />
      {isLargeEnough && <Logo />}
      {isLargeEnough && <Box component="span" sx={{ flex: 1 }} />}
    </AppBar>
  )
}

export default CustomAppBar
