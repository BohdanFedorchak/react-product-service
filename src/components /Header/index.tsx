import { useUser } from '@/hooks/useUser.tsx'
import Logo from '@/assets/images/Logo.svg'

import SearchInput from '@/components /SearchInput'
import { ChangeEvent } from 'react'
import Avatar from '@/components /Avatar'
import { cn } from '@/utils/cn'

interface IHeaderProps {
    className?: string
}

export default function Header({ className }: IHeaderProps) {
    const { data: user } = useUser()
    const searchInputChangedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('ss ', e.target.value)
    }

    return (
        <header
            className={cn(
                'bg-white flex justify-between p-4 sm:px-5 sm:py-4 border-b-transparent sm:border-b sm:border-b-gray-200',
                className
            )}
        >
            <div>
                <i className="icon-menu-alt-1-1 text-28px sm:hidden"></i>
                <div className="hidden sm:flex items-center">
                    <div className="w-8 h-8 mr-8">
                        <img src={Logo} alt="" />
                    </div>
                    <SearchInput
                        iconClassName="icon-search-1"
                        placeholder="Search"
                        onInputChanged={searchInputChangedHandler}
                    />
                </div>
            </div>
            <div className="flex items-center">
                <i className="icon-bell-1 text-2xl"></i>
                <Avatar className="ml-2.5" avatarUrl={user?.image} />
            </div>
        </header>
    )
}
