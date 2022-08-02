package com.edemirkirkan.thybackend.act.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
public class ActivityImage {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String url;

    @ManyToOne
    @JoinColumn(name="activity_id", nullable=false)
    private Activity activity;

    public ActivityImage(String url) {
        setUrl(url);
    }
}
