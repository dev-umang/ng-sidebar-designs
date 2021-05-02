import { trigger, transition, style, animate } from '@angular/animations';

export const AnimLeft = trigger(
    'AnimLeft', [
    transition(':enter', [
        style({ transform: 'translate(-50%, 0%)', opacity: 0 }),
        animate('300ms', style({ transform: 'translate(0)', opacity: 1 }))
    ]),
    transition(':leave', [
        style({ transform: 'translate(0%, 0%)', opacity: 1 }),
        animate('300ms', style({ transform: 'translate(-50%)', opacity: 0 }))
    ]),

]
);

export const AnimRight = trigger(
    'AnimRight', [
    transition(':enter', [
        style({ transform: 'translate(50%, 0%)', opacity: 0 }),
        animate('300ms', style({ transform: 'translateY(0)', opacity: 1 }))
    ]),
    transition(':leave', [
        style({ transform: 'translate(0%, 0%)', opacity: 1 }),
        animate('300ms', style({ transform: 'translate(50%)', opacity: 0 }))
    ]),
]
);

export const AnimTopLeft = trigger(
    'AnimTopLeft', [
    transition(':enter', [
        style({ transform: 'translate(-50%, -50%)', opacity: 0 }),
        animate('300ms', style({ transform: 'translateY(0)', opacity: 1 }))
    ]),
    transition(':leave', [
        style({ transform: 'translate(0%, 0%)', opacity: 1 }),
        animate('300ms', style({ transform: 'translate(-50%, -50%)', opacity: 0 }))
    ]),
]
);

export const AnimTopRight = trigger(
    'AnimTopRight', [
    transition(':enter', [
        style({ transform: 'translate(50%, -50%)', opacity: 0 }),
        animate('300ms', style({ transform: 'translateY(0)', opacity: 1 }))
    ]),
    transition(':leave', [
        style({ transform: 'translate(0%, 0%)', opacity: 1 }),
        animate('300ms', style({ transform: 'translate(50%, -50%)', opacity: 0 }))
    ]),
]
);

export const AnimTop = trigger(
    'AnimTop', [
    transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('300ms', style({ transform: 'translateY(0)', opacity: 1 }))
    ]),
    transition(':leave', [
        style({ transform: 'translateY(0%)', opacity: 1 }),
        animate('300ms', style({ transform: 'translateY(-100%)', opacity: 0 }))
    ]),
]
);

export const AnimBottom = trigger(
    'AnimBottom', [
    transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('300ms', style({ transform: 'translateY(0)', opacity: 1 }))
    ]),
    transition(':leave', [
        style({ transform: 'translateY(0%)', opacity: 1 }),
        animate('300ms', style({ transform: 'translateY(100%)', opacity: 0 }))
    ]),
]
);

export const AnimBottomLeft = trigger(
    'AnimBottomLeft', [
    transition(':enter', [
        style({ transform: 'translate(-50%, 50%)', opacity: 0 }),
        animate('300ms', style({ transform: 'translateY(0)', opacity: 1 }))
    ]),
    transition(':leave', [
        style({ transform: 'translate(0%)', opacity: 1 }),
        animate('300ms', style({ transform: 'translate(-50%, 50%)', opacity: 0 }))
    ]),
]
);

export const AnimBottomRight = trigger(
    'AnimBottomRight', [
    transition(':enter', [
        style({ transform: 'translate(50%, 50%)', opacity: 0 }),
        animate('300ms', style({ transform: 'translateY(0)', opacity: 1 }))
    ]),
    transition(':leave', [
        style({ transform: 'translate(0%)', opacity: 1 }),
        animate('300ms', style({ transform: 'translate(50%, 50%)', opacity: 0 }))
    ]),
]
);


export const AnimZoom = trigger(
    'AnimZoom', [
    transition(':enter', [
        style({ transform: 'scale(0)', opacity: 0 }),
        animate('300ms', style({ transform: 'scale(1)', opacity: 1 }))
    ]),
    transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1 }),
        animate('300ms', style({ transform: 'scale(0)', opacity: 0 }))
    ]),
]
);

export const AnimFading = trigger(
    'AnimFading', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
    ]),
    transition(':leave', [
        style({ opacity: 1 }),
        animate('300ms', style({ opacity: 0 }))
    ]),
]
);
