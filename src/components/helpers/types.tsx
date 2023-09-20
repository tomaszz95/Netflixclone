// CHILDREN LAYOUT
export type ChildrenLayoutType = {
	children: React.ReactNode
}

// FORM DATA
export type FormDataType = {
	password: string
	identifier: string
	username: string
}

// LOGIN FORM COMPONENT
export type LoginFormComponentType = {
	type: string
	onFormData: (formData: FormDataType) => void
}

//NEWS LIST DATA
export type NewsListFetchedType = [
	{
		author: string
		date: string
		description: string
		title: string
		img: string
		_id: string
		text: string
		delete: boolean
		parsedDate?: any
	},
]

//NEWS LIST SINGLE DATA
export type SingleNewsDataType = {
	author: string
	date: string
	description: string
	title: string
	img: string
	text: string
	_id: string
	delete: boolean
}

//NEWS LIST SINGLE DATA + ROLE
export type SingleNewsDataRoleType = {
	newsData: SingleNewsDataType
	role: string
}

// NEW NEWS FORM
export type NewNewsFormData = {
	description: string
	title: string
	img: string
	text: string
}

// LOGINDATA
export type LoginDataType = {
	role: string
	name: string
	img: string
	belong: string
	email: string
}

// LOGINDATA DUMMY
export type LoginDummyDataType = {
	[email: string]: LoginDataType
}

// MESSAGES INFO
export type MessagesInfoType = {
	author: string
	content: string
	date: string
}

//MESSAGES ITEM
export type MessagesItemType = {
	caller: string
	img: string
	_id: string
	content: [MessagesInfoType]
}

//MESSAGES LIST DATA
export type MessagesListDataType = [MessagesItemType]

// TIMETABLE LESSONS
export type TimetableLessonsType = {
	subject?: string
	group?: string
	class: string
}

// TIMETABLE DAYS
export type TimetableDaysType = {
	Monday: TimetableLessonsType
	Tuesday: TimetableLessonsType
	Wednesday: TimetableLessonsType
	Thursday: TimetableLessonsType
	Friday: TimetableLessonsType
}

// TIMETABLE FULL DATA
export type TimetableDataType = {
	_id: string
	name: string
	belong: string
	lessons: {
		[day: string]: TimetableDaysType
	}
}

// GRADES LIST DATA
export type GradesListType = {
	_id: string
	class: string
	content: GradesListContentType
}

// GRADES LIST CONTENT
export type GradesListContentType = {
	'Semester 1': GradesNamesType
	'Semester 2': GradesNamesType
	[key: string]: GradesNamesType
}

// GRADES NAMES
export type GradesNamesType = {
	[name: string]: GradesSubjectType
}

// GRADES SUBJECT
export type GradesSubjectType = {
	[subject: string]: GradesSubjectInsideType
}

// GRADES SUBJECT INSIDE
export type GradesSubjectInsideType = {
	Pluses: GradesType
	Grades: GradesType
}

// GRADES ARRAY
export type GradesType = [SingleGradesType]

// SINGLE GRADE
export type SingleGradesType = { category: string; grade: string; date: string; topic: string; weight: number }

// STATISTICS
export type StatisticsStudentDataType = [
	{
		_id: string
		class?: string
		name?: string
		averages: StatisticsAveragesType
	},
]

// STATISTICS OBJ
export type StatisticsObjectStudentDataType = {
	_id: string
	class?: string
	name?: string
	averages: {
		'Semester 1': StatisticsSubjectsType
	}
}

// STATISTICS AVERAGE
export type StatisticsAveragesType = {
	'Semester 1': StatisticsSubjectsType
	'Semester 2': StatisticsSubjectsType
}

// STATISTICS AVERAGE PUSH
export type StatisticsAveragePush = {
	[subject: string]: {
		[subject: string]: string
	}
}

// STATISTICS SUBJECT
export type StatisticsSubjectsType = {
	[subject: string]: string
}

// STATISTICS SUBJECT
export type StatisticsAverageSubjectType = {
	subject: string
	average: string
}
