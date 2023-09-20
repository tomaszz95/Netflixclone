import { LoginDummyDataType } from './types'

const dummeLoginData: LoginDummyDataType = {
	'student1@student.com': {
		role: 'student',
		belong: '3C',
		name: 'Tomasz Wójcik',
		img: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
		email: 'student1@student.com',
	},
	'student2@student.com': {
		role: 'student',
		belong: '1A',
		name: 'Magdalena Okno',
		img: 'https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_1280.jpg',
		email: 'student2@student.com',
	},
	'teacher1@teacher.com': {
		role: 'teacher',
		belong: 'Mathematics',
		name: 'Michał Nowak',
		img: 'https://cdn.pixabay.com/photo/2016/03/24/09/10/man-1276384_1280.jpg',
		email: 'teacher1@teacher.com',
	},
	'teacher2@teacher.com': {
		role: 'teacher',
		belong: 'Geography',
		name: 'Anna Kowalska',
		img: 'https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_1280.jpg',
		email: 'teacher2@teacher.com',
	},
}

export const getLoginData = (email: string) => {
	const loginData = dummeLoginData[email]
	return loginData
}
