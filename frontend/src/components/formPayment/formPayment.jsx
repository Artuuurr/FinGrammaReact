import axios from 'axios'
import React, { useState } from 'react'

export const FormPayment = () => {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
		cardNumber: '',
		cvv: '',
		expiryDate: '',
	})

	const [paymentStatus, setPaymentStatus] = useState('')
	const [loading, setLoading] = useState(false)

	const handleChange = e => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = async e => {
		e.preventDefault()
		try {

			// Проверяем, заполнены ли все обязательные поля
			if (
				!formData.name ||
				!formData.phone ||
				!formData.email ||
				!formData.cardNumber ||
				!formData.cvv ||
				!formData.expiryDate
			) {
				setPaymentStatus('error')
				return
			}
			// Включаем отображение загрузки
			setLoading(true);

			// Отправляем данные на сервер
			const response = await axios.post(
				'http://localhost:3001/process-payment',
				formData
			)

			setPaymentStatus(response.data.status)

      setTimeout(async () => {
        setLoading(false);
				setPaymentStatus('success')
      }, 5000);
			

		} catch (error) {
			console.error('Error processing payment:', error)
			setPaymentStatus('failed')
		}
	}

	return (
		<div className='h-full'>
			<form onSubmit={handleSubmit}>
				<div className='text-center mb-8'>
					<h3 className='text-[32px]'>Введите данные для оплаты</h3>
				</div>
				<input
					name='name'
					placeholder='Имя'
					value={formData.name}
					onChange={handleChange}
					className='flex mx-auto pl-4 w-[480px] h-16 bg-slate-100 rounded-2xl mb-4'
				/>
				<div className='w-[480px] flex mx-auto'>
					<input
						name='phone'
						placeholder='Телефон'
						value={formData.phone}
						onChange={handleChange}
						className='h-16 w-full bg-slate-100 rounded-2xl pl-4 mr-2'
					/>
					<input
						name='email'
						placeholder='Email'
						value={formData.email}
						onChange={handleChange}
						className='h-16 w-full bg-slate-100 rounded-2xl pl-4 ml-2'
					/>
				</div>
				<input
					name='cardNumber'
					placeholder='Номер карты'
					value={formData.cardNumber}
					onChange={handleChange}
					className='flex mx-auto pl-4 w-[480px] h-16 bg-slate-100 rounded-2xl mb-4 mt-4'
				/>
				<div className='w-[480px] flex mx-auto'>
					<input
						name='cvv'
						placeholder='CVV'
						value={formData.cvv}
						onChange={handleChange}
						className='h-16 w-full bg-slate-100 rounded-2xl pl-4 mr-2'
					/>
					<input
						name='expiryDate'
						placeholder='Срок действия (MM/YY)'
						value={formData.expiryDate}
						onChange={handleChange}
						className='h-16 w-full bg-slate-100 rounded-2xl pl-4 ml-2'
					/>
				</div>
				<button
					type='submit'
					className='bg-minorColor text-white w-[480px] flex justify-center mx-auto h-16 items-center rounded-2xl mt-4'
				>
					{loading ? 'Загрузка...' : 'Оплата'}
				</button>
			</form>
			
			<div className='flex pt-2 justify-center w-[480px] mx-auto'>
				<img
					className='m-4'
					src='/images/pay/mastercard.svg'
					alt='mastercard'
				/>
				<img className='m-4' src='/images/pay/mir.svg' alt='mir' />
				<img className='m-4' src='/images/pay/visa.svg' alt='visa' />
			</div>{paymentStatus && (
				<div className='text-center mt-4'>
					{paymentStatus === 'success' ? (
						<h2 className='text-green-500'>Оплата прошла успешно!</h2>
					) : paymentStatus === 'error' ? (
						<h2 className='text-red-500'>Пожалуйста, заполните все поля</h2>
					) : (
						<h2 className='text-red-500'>
							Произошла ошибка при обработке платежа
						</h2>
					)}
				</div>
			)}
		</div>
	)
}
