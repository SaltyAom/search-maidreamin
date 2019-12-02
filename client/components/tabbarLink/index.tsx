import { useRouter } from 'next/router'

import Link from 'next/link'

import Button from '@material/react-button'

const TabbarLink = ({ href, children }) => {
    let { route } = useRouter()

    if(route === href)
        return(
            <Link href={href}>
                <Button className="tab active" href={href}>
                    {children}
                </Button>
            </Link>
        )

    return(
        <Link href={href}>
            <Button className="tab" href={href}>
                {children}
            </Button>
        </Link>
    )
}

export default TabbarLink