export interface IInfoCard {
    img?: string,
    title: string,
    desc: string,
    isAboutCard: boolean,
    withButton: boolean,
    buttonText?: string,
    btnLink?: string
}

export interface IAboutCard {
    title: string,
    desc: string,
    bgChar: string,
    addStyles?: string
}

export interface ITeacherCard {
    video: string,
    name: string,
    skill: string,
    knowledges: string[],
    desc: string
}

export interface ICoursePriceCard {
    alternative_price?: {
        prevous_cost: string | null,
        prevous_period: string,
        total: string
    },
    description: string,
    general_price?: {
        prevous_cost: string | null,
        prevous_period: string,
        total: string
    },
    id: number,
    promo: {
        id: number,
        title: string
    },
    title: string

}

export interface IRewiewCard {
    description: string,
    created_at: string,
    photo: string,
    title: string,
    name: string,
}

export interface IAppeals {
    phone_number: string,
    message?: string,
    teacher?: number,
    course?: number,
    topic?: string,
    email: string,
    name: string,
    tag?: number
}

export interface ICourses {
    alternative_price?: {
        prevous_cost: string,
        prevous_period: string,
        total: string
    },
    description: string,
    general_price?: {
        prevous_cost: string,
        prevous_period: string,
        total: string
    },
    id: number,
    promo: {
        id: number,
        title: string
    },
    title: string
}

export interface ITeacher {
    id: number,
    specialization: {
        language: string,
        level: string
    }[],
    name: string,
    about: string,
    university: {
        short: string,
        original: string
    }[],
    work_experience: number,
    photo: string,
    activity: string,
    hobbies: string,
    additionally: string,
    audio: string,
    working_with: string,
    heading: string
}

export interface ITeachersList {
    count: number,
    next: string,
    previous: string,
    results: ITeacher[]
}

export interface IContacts {
    dzen: string,
    email: string,
    instagram: string,
    phone: string,
    telegram: string,
    tg_chanel: string,
    viber: string,
    vkontakte: string,
    whatsapp: string,
    youtube: string,
    social_networks: string,
}

export interface IWordDay {
    color: string,
    created_at: string,
    description: string,
    title: string
}