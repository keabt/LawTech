from django.db import models
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

def validate_endate(end_date, start_date):
    if end_date < start_date:
        raise ValidationError(
            _('end_date must be later than the start_date'),
            params={'value': end_date}
        )
# Create your models here.
class Gamer(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phoneNumber = models.CharField(max_length=20)
    dob = models.DateField()
    address = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Game(models.Model):
    title = models.CharField(max_length=255)
    genre = models.CharField(max_length=255)
    release_date = models.CharField(max_length=255)
    platform = models.CharField(max_length=255)
    signing_bonus = models.IntegerField()
    equipment = models.CharField(max_length=255)

    def __str__(self):
        return self.title
    
class Contract(models.Model):
    gamer = models.ForeignKey(Gamer, on_delete=models.CASCADE)
    contract_title = models.CharField(max_length=255)
    contract_description = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField(validators=[validate_endate])
    def __str__(self):
        return self.contract_title
    
class ContractGames(models.Model):
    contract = models.ForeignKey(Contract, on_delete=models.CASCADE)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)

    





