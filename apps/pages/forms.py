from django import forms
from .models import Contact

class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ['name', 'email', 'subject', 'message','budget', 'timeline']
        widgets = {
            'name': forms.TextInput(attrs={
                'placeholder': 'Your Full Name',
                'class': 'form-control',
                'required': True
            }),
            'email': forms.EmailInput(attrs={
                'placeholder': 'your.email@example.com',
                'class': 'form-control',
                'required': True
            }),
            'subject': forms.TextInput(attrs={
                'placeholder': 'AI Project Discussion / Collaboration',
                'class': 'form-control',
                'required': True
            }),
            'message': forms.Textarea(attrs={
                'placeholder': 'Tell me about your AI project ideas or how we can collaborate...',
                'class': 'form-control',
                'rows': 6,
                'required': True
            }),
        }
    
    def clean_name(self):
        name = self.cleaned_data.get('name')
        if len(name) < 2:
            raise forms.ValidationError('Name must be at least 2 characters long.')
        return name
    
    def clean_message(self):
        message = self.cleaned_data.get('message')
        if len(message) < 10:
            raise forms.ValidationError('Message must be at least 10 characters long.')
        return message
