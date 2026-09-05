export const login_selector = {
    email: "#email",
    password: "[name='password']",
    remember_me: "#_r_19_-form-item",
    login_button: "//span[normalize-space()='Log in']",
    forgot_password: "//a[@class='text-sm text-primary font-medium hover:text-primary-700']",
    forgot_password_email_box: "[placeholder='e.g. xyz@gmail.com']",
    forgot_next: "[type='submit']",
    back_to_login: "//a[normalize-space()='Back to Login']"





}

export const branch_selector = {
    add_branch: "/html[1]/body[1]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/div[2]/div[2]/button[1]",
    branch: "[name='name']",
    slug: "#slug",
    phone: "[name='phone']",
    email: "#email",
    status: "//div[@id='radix-_r_15_']//div[3]",
    address: "#address",
    timezone: "",


    //branch admin details
    first_name: "#admin_first_name",
    last_name: "#admin_last_name",
    admin_email: "#admin_email",
    password: "[name='admin_password']",
    admin_phone: "//input[contains(@value,'+977')]",
    save_changes: "//button[normalize-space()='Save Changes']"
}

export const branch_waiting={
    // add_waiting:"",
    search_customer:"[placeholder='Enter name or phone number']",
    timi_ho:"button[class='w-full text-left px-3 py-2 text-sm border-b last:border-b-0 flex items-center gap-2 hover:bg-gray-50 cursor-pointer']",
    next:"button[type='submit']",
    add_your_first_service:"(//button[@class='flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed border-primary/30 bg-neutral-100 py-10 text-center text-primary hover:bg-primary/5'])[1]",
    brick_picker:"/html[1]/body[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/span[1]/span[2]",
    brick_picker_done:"//button[normalize-space()='Done']",
    assign_staff_selector:"(//div[@class='ml-2 h-4 w-4 opacity-50'])[2]",
    assign_staff:"//span[contains(text(),'timi_po ho')]",
    add_waiting_click:"/html[1]/body[1]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/button[1]",
    start_session:"//button[normalize-space()='Start Session']",
    complete_session:"//div//div//div//div//div//div//div[1]//div[2]//div[2]//button[2]",
    complete_session_2:"//button[@type='submit']",
    process:"//button[normalize-space()='Process Rs 344']"




}


export const branch_session = {
    // session:"/html[1]/body[1]/div[3]/aside[1]/div[2]/div[2]/nav[1]/a[2]/span[2]",

    new_session: "//button[normalize-space()='New Session']",
    search_customer: "[placeholder='Enter name or phone number']",
    // add_new_customer:"//button[normalize-space()='+ Add as new customer']",
    phone_number: "[placeholder='Enter phone number']",
    session_next: "//button[normalize-space()='Next']",
    click_add_first_service: "/html[1]/body[1]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[3]/button[1]",
    add_first_search_service: "//span[normalize-space()='services']",
    add_first_done: "//button[normalize-space()='Done']",
    select_staff: "/html[1]/body[1]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/button[1]/div[1]",
    assign_staff: "//span[contains(text(),'sarei_ramri honi')]", //"#radix-_r_ln_",
    price: "#services.0.selling_price",
    //    add_first_product:"",
    add_to_session: "/html[1]/body[1]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/div[1]/div[3]/div[1]/button[1]",


}
export const branch_add_service = {
    add_service: "div[class='block min-[1360px]:hidden max-[360px]:ms-0 ms-auto'] button",
    service_name: "#name",
    service_category: "/html[1]/body[1]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/button[1]/div[1]",
    service_category_type:"//span[@class='whitespace-normal break-words'][normalize-space()='hair complement']",
    price: "#price",
    duration: "#duration",
    commision:"/html[1]/body[1]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/button[1]",
    commision_type: "(//div[@role='option'])[1]",
    add_service_click: "/html[1]/body[1]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/button[1]"

}
export const branch_logout = {
    click_profile: "/html[1]/body[1]/div[3]/aside[1]/div[3]/div[1]",
    logout: "//button[normalize-space()='Logout']",
    confirm_logout: "//button[@class='group/button inline-flex shrink-0 items-center justify-center rounded-lg border bg-clip-padding text-sm leading-[16px] font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer shadow-sm bg-destructive hover:bg-destructive/90 focus-visible:ring-destructive/20 text-white border-destructive-600 hover:border-destructive-700 py-[10px] gap-1.5 px-[16px] has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 sm:w-auto w-full']"
}


