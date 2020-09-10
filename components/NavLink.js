import { useRouter } from "next/router";
import Link from "next/link";

const defaultProps = {
  activeClassName: "text-red-500 font-600",
};

export const NavLink = ({ href, linkName, activeClassName }) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <a className={router.pathname === href ? activeClassName : null}>
        {linkName}
      </a>
    </Link>
  );
};

NavLink.defaultProps = defaultProps;
