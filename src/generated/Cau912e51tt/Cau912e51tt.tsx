
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-au912e51tt',
  shadow: true,
})
export class Cau912e51tt {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  