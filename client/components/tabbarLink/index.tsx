import { FC, memo } from "react"

import { useRouter } from "next/router"

import Link from "next/link"

import Button from "@material/react-button"

import ITabbarLink from "./types"

const TabbarLink: FC<ITabbarLink> = memo(({ href, children }) =>
	useRouter().route === href ? (
		<Link href={href}>
			<Button className="tab active" href={href}>
				{children}
			</Button>
		</Link>
	) : (
		<Link href={href}>
			<Button className="tab" href={href}>
				{children}
			</Button>
		</Link>
	)
)

export default TabbarLink
