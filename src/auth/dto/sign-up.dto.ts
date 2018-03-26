export class SignUpDto {
	// mobile
	isMobile?: boolean;
	confirmCode?: number;
	phone?: string;
	deviceId?: string;

	// web
	email?: string;
	password?: string;
}