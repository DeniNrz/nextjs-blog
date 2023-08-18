import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useAuthRedirect } from './useAuthRedirect'
import { useAuth } from '../../../hooks/useAuth'
import { IAuthInput } from './auth.interface'
import { Meta } from '../../../utils/meta/Meta'
import { Heading } from '../../ui/heading/Heading'
import { Button } from '../../ui/form-elements/Button'
import { AuthFields } from './AuthFields'
import { useActions } from '../../../hooks/useActions'

import styles from './Auth.module.scss'

export const Auth: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	})

	const { login, register } = useActions()

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') login(data)
		else if (type === 'register') register(data)
		reset()
      setTimeout(() => {
         window.location.reload();
       }, 200)
	}

	return (
		<Meta title="Auth">
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title="Auth" className="mb-6" />

					<AuthFields
						formState={formState}
						register={registerInput}
						isPasswordRequired
					/>

					<div className={styles.buttons}>
						<Button
							type="submit"
							onClick={() => setType('login')}
							disabled={isLoading}
						>
							Login
						</Button>
						<Button
							type="submit"
							onClick={() => setType('register')}
							disabled={isLoading}
						>
							Register
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	)
}
