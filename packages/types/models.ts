export interface User {
    id:            number;
    names:         string;
    last_name:     null;
    user_name:     string;
    bio:           string;
    picture:       string;
    email:         string;
    rol:           null;
    is_registered: boolean;
    phone:         null;
    created_at:    Date;
    updated_at:    Date;
    verified_at:   Date;
    posts:         any[];
    discussion:    any[];
    comments:      any[];
}
