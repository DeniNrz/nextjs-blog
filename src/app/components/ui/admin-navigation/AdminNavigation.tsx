import { FC } from 'react'

import { AdminNavItem } from './AdminNavItem'
import { navItems } from './admin-navigation.data'

import styles from './AdminNavigation.module.scss'

export const AdminNavigation: FC = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				{navItems.map((item) => (
					<AdminNavItem key={item.link} item={item} />
				))}
			</ul>
		</nav>
	)
}
