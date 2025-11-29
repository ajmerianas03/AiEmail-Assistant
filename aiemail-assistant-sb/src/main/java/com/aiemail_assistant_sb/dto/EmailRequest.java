package com.aiemail_assistant_sb.dto;


import lombok.Data;

@Data
public class EmailRequest {

    private String emailContent;

    private String tone;
}
