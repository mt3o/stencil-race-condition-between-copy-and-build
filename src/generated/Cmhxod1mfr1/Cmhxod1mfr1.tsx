
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-mhxod1mfr1',
  shadow: true,
})
export class Cmhxod1mfr1 {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  