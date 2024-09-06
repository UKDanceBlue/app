import "./NavigationMenu.css";

import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { themeConfigContext } from "@config/antThemeConfig";
import { API_BASE_URL } from "@config/api";
import { marathonContext } from "@config/marathonContext";
import { useAntFeedback } from "@hooks/useAntFeedback";
import type { Authorization, AuthorizationRule } from "@ukdanceblue/common";
import {
  AccessLevel,
  checkAuthorization,
  defaultAuthorization,
} from "@ukdanceblue/common";
import { Button, Menu, Select } from "antd";
import { useContext, useEffect, useState } from "react";

import { MasqueradeSelector } from "./MasqueradeSelector";

interface NavItemType {
  slug: string;
  title: string;
  url?: string;
  element?: React.ReactNode;
  authorizationRules?: AuthorizationRule[];
}

const navItems = [
  {
    slug: "home",
    title: "Home",
    url: "/",
  },
  {
    slug: "events",
    title: "Events",
    authorizationRules: [
      {
        accessLevel: AccessLevel.CommitteeChairOrCoordinator,
      },
    ],
  },
  {
    slug: "teams",
    title: "Teams",
    authorizationRules: [
      {
        accessLevel: AccessLevel.CommitteeChairOrCoordinator,
      },
    ],
  },
  {
    slug: "people",
    title: "People",
    authorizationRules: [
      {
        accessLevel: AccessLevel.CommitteeChairOrCoordinator,
      },
    ],
  },
  {
    slug: "notifications",
    title: "Notifications",
    authorizationRules: [
      {
        accessLevel: AccessLevel.CommitteeChairOrCoordinator,
      },
    ],
  },
  {
    slug: "marathon",
    title: "Marathon",
    authorizationRules: [
      {
        accessLevel: AccessLevel.CommitteeChairOrCoordinator,
      },
    ],
  },
  {
    slug: "feed",
    title: "Feed",
    authorizationRules: [
      {
        accessLevel: AccessLevel.CommitteeChairOrCoordinator,
      },
    ],
  },
  {
    slug: "images",
    title: "Images",
    authorizationRules: [
      {
        accessLevel: AccessLevel.CommitteeChairOrCoordinator,
      },
    ],
  },
  {
    slug: "config",
    title: "Config",
    authorizationRules: [
      {
        accessLevel: AccessLevel.Admin,
      },
    ],
  },
];
const { pathname, href } = window.location;
const activeKeys: string[] = [];
for (const item of navItems) {
  if (item.url != null && (pathname || "/") === item.url) {
    activeKeys.push(item.slug);
  } else if (item.slug === pathname.slice(1)) {
    activeKeys.push(item.slug);
  }
}

const loadingOption = [
  <Select.Option key="" value="" disabled>
    Loading...
  </Select.Option>,
];

export const NavigationMenu = ({
  auth: { loggedIn, authorization },
}: {
  auth: {
    loggedIn: boolean | undefined;
    authorization: Authorization | undefined;
  };
}) => {
  const { dark, setDark } = useContext(themeConfigContext);
  const { showErrorMessage } = useAntFeedback();

  const [menuItems, setMenuItems] = useState<
    {
      key: string;
      title: string;
      label: JSX.Element;
    }[]
  >([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const filteredItems: NavItemType[] = [];
      for (const item of navItems) {
        if (!item.authorizationRules) {
          filteredItems.push(item);
        } else {
          let isAuthorized = false;
          for (const authorizationRule of item.authorizationRules) {
            if (
              // eslint-disable-next-line no-await-in-loop
              await checkAuthorization(
                authorizationRule,
                authorization ?? defaultAuthorization
              )
            ) {
              isAuthorized = true;
              break;
            }
          }
          if (isAuthorized) {
            filteredItems.push(item);
          }
        }
      }

      const updatedMenuItems = filteredItems.map((item) => ({
        key: item.slug,
        title: item.title,
        label: (
          <a href={item.url ?? `/${item.slug}`}>{item.element ?? item.title}</a>
        ),
      }));

      setMenuItems(updatedMenuItems);
    };

    fetchMenuItems().catch((error: unknown) => {
      void showErrorMessage({ content: "Failed to fetch menu items" });
      console.error("Failed to fetch menu items", error);
    });
  }, [authorization, showErrorMessage]);

  const { setMarathon, marathon, loading, marathons } =
    useContext(marathonContext);

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={activeKeys}
      items={[
        ...menuItems,
        {
          type: "item",
          key: "login",
          style: {
            background: "transparent",
            marginLeft: "auto",
          },
          label: loggedIn ? (
            <a
              href={`${API_BASE_URL}/api/auth/logout?redirectTo=${encodeURI(
                href
              )}`}
            >
              Logout
            </a>
          ) : (
            <a
              href={`${API_BASE_URL}/api/auth/login?returning=cookie&redirectTo=${encodeURI(
                href
              )}`}
            >
              Login
            </a>
          ),
        },
        {
          type: "divider",
        },
        {
          type: "item",
          key: "dark",
          title: "Dark",
          style: {
            background: "transparent",
          },
          label: (
            <Button
              icon={
                dark ? (
                  <SunOutlined style={{ color: "inherit" }} />
                ) : (
                  <MoonOutlined style={{ color: "inherit" }} />
                )
              }
              onClick={() => setDark(!dark)}
              type="text"
              style={{ color: "inherit" }}
            />
          ),
        },
        {
          type: "item",
          key: "masquerade",
          title: "Masquerade",
          style: {
            background: "transparent",
          },
          label: <MasqueradeSelector />,
        },
        {
          type: "item",
          key: "selected-marathon",
          title: "Select Marathon",
          style: {
            background: "transparent",
          },
          label: (
            <Select
              defaultValue={""}
              onChange={(value) => setMarathon(value)}
              loading={loading}
              value={marathon?.id}
              variant="borderless"
            >
              {marathons
                ? marathons.map((marathon) => (
                    <Select.Option key={marathon.id} value={marathon.id}>
                      {marathon.year}
                    </Select.Option>
                  ))
                : loadingOption}
            </Select>
          ),
        },
      ]}
    />
  );
};
