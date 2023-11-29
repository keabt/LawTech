from django.db import models

class USER(models.Model):
    OFFEROR = 'Offeror'
    OFFEREE = 'Offeree'
    USER_TYPE = (
        (OFFEROR, ('Offeror')),
        (OFFEREE, ('Offeree'))
    )
    firstName = models.CharField(max_length=200)
    lastName = models.CharField(max_length=200)
    userType = models.PositiveSmallIntegerField(
        choices=USER_TYPE,
        default='Please Select'
    )
    email = models.EmailField()
    password = models.CharField(max_length=50)
    confirm_password = models.CharField(max_length=50)
    agreePrivacyTerms = models.BooleanField('I agree to privacy and terms')

    def __str__(self):
        return self.name
    # Contract schema - Foreign key is not working
    class CONTRACT(models.Model): 
        title = models.CharField(max_length=200)
        offeree = models.ForeignKey(USER, on_delete=models.CASCADE)
        start_date = models.DateField()
        end_date = models.DateField()

        def __str__(self):
            return self.name
        



