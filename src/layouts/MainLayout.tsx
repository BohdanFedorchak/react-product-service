import { ReactNode } from 'react'
import Header from '@/components /Header'
import { cn } from '@/utils/cn'

export interface LayoutProps {
    children: ReactNode
    className?: string
    headerClassName?: string
}

export default function MainLayout({
    children,
    className,
    headerClassName,
}: LayoutProps) {
    return (
        <div className={cn('min-h-screen flex flex-col', className)}>
            <Header className={headerClassName} />
            <main className="flex flex-1">{children}</main>
            <footer>footer</footer>
        </div>
    )
}
